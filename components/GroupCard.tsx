import clsx from "clsx";
import React from "react";
import { Text, View } from "react-native";

type GroupCardIconProps = {
  size: number;
  color: string;
};

type GroupCardProps = {
  icon: (props: GroupCardIconProps) => React.ReactNode;
  label: string;
  description: string;
  varient?: "blue" | "white";
};

const GroupCard = ({
  icon,
  label,
  description,
  varient = "blue",
}: GroupCardProps) => {
  const isBlue = varient === "blue";

  return (
    <View
      className={clsx(
        "relative w-full p-8 flex-col gap-4 rounded-xl overflow-hidden mb-4",
        isBlue
          ? "bg-primaryDark "
          : "bg-transparent border-primaryDark border-4",
      )}
    >
      {icon({ size: 48, color: isBlue ? "white" : "#005793" })}

      <Text
        className={clsx(
          "font-bold text-xl",
          isBlue ? "text-white" : "text-primaryDark",
        )}
      >
        {label}
      </Text>

      <Text
        className={clsx(
          "font-bold text-xl",
          isBlue ? "text-white/50" : "text-primaryDark",
        )}
      >
        {description}
      </Text>

      <View className="absolute inset-y-0 right-12 flex justify-center items-end opacity-20">
        {icon({ size: 72, color: isBlue ? "white" : "#005793" })}
      </View>
    </View>
  );
};

export default GroupCard;
