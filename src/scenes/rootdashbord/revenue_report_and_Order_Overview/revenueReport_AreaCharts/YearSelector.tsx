"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from "lucide-react";
import React from "react";

// interface Props {}

function YearSelector() {
  // const {} = props

  const yars = [
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
  ]

  return (
    <div className=" seletorYear " >
      <Select >
        <SelectTrigger className=" yearSeleteBtn   ">
            <div className=" flex items-center " >
            <CalendarDays className=" calendarIcon " />
            <SelectValue  placeholder="Select Option" />
            </div>
        </SelectTrigger>
        <SelectContent className=" selectContent " >
            {
                yars.map((yaer) => <SelectItem key={`${yaer}`} value={`${yaer}`}>Year {yaer}</SelectItem>)
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default YearSelector;
