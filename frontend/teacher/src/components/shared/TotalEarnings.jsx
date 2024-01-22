import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import PropTypes from 'prop-types';
import { Button } from "../ui/button";
import { FaRupeeSign } from "react-icons/fa";
const courses = [
    {
        value: "course-1",
        label: "course-1",
    },
    {
        value: "course-2",
        label: "course-2",
    },
    {
        value: "course-3",
        label: "course-3",
    },
    {
        value: "course-4",
        label: "course-4",
    },
    {
        value: "course-5",
        label: "course-5",
    },
]
const TotalEarnings = (props) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <div className='shadow-[0rem_0rem_1rem] shadow-indigo-500/20
        dark:shadow-popover p-4 rounded-md w-full bg-white dark:bg-black'>
            <div className='flex items-center justify-between gap-x-8'>
                <h3 className='text-base font-bold'>Your Total Earnings</h3>
                {/* dropdown */}
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[150px] justify-between"
                        >
                            {value
                                ? courses.find((course) => course.value === value)?.label
                                : "Select course..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[150px] p-0">
                        <Command>
                            <CommandInput placeholder="Search course..." className="h-9" />
                            <CommandEmpty>No course found.</CommandEmpty>
                            <CommandGroup>
                                {courses.map((course) => (
                                    <CommandItem
                                        key={course.value}
                                        value={course.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {course.label}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                value === course.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>

            </div>
            <ul className='flex justify-between my-3'>
                <li className="text-sm">
                    This month <br />
                    <span className='font-semibold text-[.85rem]'>${props.month}</span>
                </li>
                <li className="text-sm">
                    Today <br />
                    <span className='font-semibold text-[.85rem]'>${props.day}</span>
                </li>
            </ul>
            <div className='flex justify-between items-center mt-6'>
                <span className="text-sm">
                    Available <br />
                    <span className='font-semibold'>${props.available}</span>
                </span>
                <Button variant="teacher">
                    <FaRupeeSign /><p>Withdraw</p>
                </Button>
            </div>
        </div>
    )
}
TotalEarnings.propTypes = {
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    available: PropTypes.number.isRequired,
};

TotalEarnings.defaultProps = {
    month: 9990,
    day: 9990,
    available: 9990,
};
export default TotalEarnings