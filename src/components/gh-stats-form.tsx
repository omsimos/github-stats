"use client";

import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import themes from "@/themes.json";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Icons } from "./icons";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FormSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  theme: z.string().min(1, { message: "Please select a theme." }),
  hideBorder: z.boolean(),
  countPrivate: z.boolean(),
});

export function GhStatsForm() {
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const themePreview = searchParams.get("theme_preview");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      hideBorder: true,
      countPrivate: true,
      theme: themePreview || "default",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { username, theme, hideBorder, countPrivate } = data;

    setLoading(true);

    toast.success("Generated GitHub Stats!");

    push(
      `/user/${username}?theme=${theme}&hide_border=${hideBorder}&count_private=${countPrivate}`
    );
  }

  function updateThemePreview(_theme: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("theme_preview", _theme);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex items-end gap-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>GitHub Username</FormLabel>
                <FormControl>
                  <Input placeholder="omsimos" {...field} />
                </FormControl>
                <FormMessage className="sr-only" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Theme</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value || field.value === "default"
                            ? "text-muted-foreground"
                            : ""
                        )}
                      >
                        {field.value
                          ? themes.find((theme) => theme.value === field.value)
                              ?.label
                          : "Select theme"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search theme..." />
                      <CommandEmpty>No theme found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {themes.map((theme) => (
                            <CommandItem
                              value={theme.label}
                              key={theme.value}
                              onSelect={() => {
                                form.setValue("theme", theme.value);
                                updateThemePreview(theme.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  theme.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {theme.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage className="sr-only" />
              </FormItem>
            )}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="text-muted-foreground">
                <Icons.adjust className="text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto px-7">
              <p className="text-muted-foreground mb-5 text-sm">
                Update card preferences.
              </p>

              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="hideBorder"
                  render={({ field }) => (
                    <div className="flex items-center gap-3">
                      <FormItem>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="hide-border-toggle"
                          />
                        </FormControl>
                      </FormItem>
                      <Label htmlFor="hide-border-toggle" className="mb-1">
                        Hide Card Border
                      </Label>
                    </div>
                  )}
                />

                <FormField
                  control={form.control}
                  name="countPrivate"
                  render={({ field }) => (
                    <div className="flex items-center gap-3">
                      <FormItem>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="count-private-toggle"
                          />
                        </FormControl>
                      </FormItem>
                      <Label htmlFor="count-private-toggle" className="mb-1">
                        Count Private Commits
                      </Label>
                    </div>
                  )}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {!loading ? "Generate Stats" : <Icons.spinner />}
        </Button>
      </form>
    </Form>
  );
}
