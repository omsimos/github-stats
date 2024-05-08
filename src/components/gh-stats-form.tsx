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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  theme: z.string({
    required_error: "Please select a theme.",
  }),
  showBorder: z.boolean(),
  showCommits: z.boolean(),
});

export function GhStatsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      showBorder: false,
      showCommits: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: JSON.stringify(data, null, 2),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 max-w-md mx-auto"
      >
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
                {/* <FormMessage /> */}
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
                          !field.value && "text-muted-foreground"
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
                {/* <FormMessage /> */}
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
                  name="showBorder"
                  render={({ field }) => (
                    <div className="flex items-center gap-3">
                      <FormItem>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="privCommits"
                          />
                        </FormControl>
                      </FormItem>
                      <Label htmlFor="priv-commits" className="mb-1">
                        Show card border
                      </Label>
                    </div>
                  )}
                />

                <FormField
                  control={form.control}
                  name="showCommits"
                  render={({ field }) => (
                    <div className="flex items-center gap-3">
                      <FormItem>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="privCommits"
                          />
                        </FormControl>
                      </FormItem>
                      <Label htmlFor="priv-commits" className="mb-1">
                        Show private commits
                      </Label>
                    </div>
                  )}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button type="submit" className="w-full">
          Generate Stats
        </Button>
      </form>
    </Form>
  );
}
