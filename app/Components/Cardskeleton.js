"use client";
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function Cardskeleton() {
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <>
      {array.map((val, ind) => (
        <Card
          key={ind}
          className="w-80 md:w-80 lg:w-96 dark:bg-slate-900 h-[28rem] mb-8 mt-8 mx-auto p-6 "
        >
          <Skeleton className="rounded-lg ">
            <div className="h-64 rounded-lg bg-default-300 "></div>
          </Skeleton>
          <div className="space-y-3 mt-8 ">
            <div className="flex justify-between w-full mb-8">
              <Skeleton className="w-1/4 rounded-lg">
                <div className="h-3 w-1/4 rounded-lg bg-default-200 "></div>
              </Skeleton>
              <Skeleton className="w-1/4 rounded-lg">
                <div className="h-3 w-1/4 rounded-lg bg-default-200 "></div>
              </Skeleton>
            </div>

            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </>
  );
}
