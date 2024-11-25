"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const DashBoardPage = () => {
  const { user } = useUser();
  return (
    <div>
      <div>{user?.firstName}</div>
      <div>{user?.lastName}</div>
    </div>
  );
};

export default DashBoardPage;