import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(inputDate: string) {
  // Parse the input date
  const parts = inputDate.split("-");
  const month = parseInt(parts[0], 10) - 1; // Months are 0-indexed in JavaScript
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  const inputDateObject = new Date(year, month, day);

  // Format the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = inputDateObject.toLocaleDateString("en-US", options);

  // Calculate the time difference
  const currentDate = new Date();
  const timeDifference: number =
    currentDate.getTime() - inputDateObject.getTime();

  // Convert milliseconds to seconds, minutes, hours, days, months, and years
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // Determine the appropriate time unit and calculate the remaining amount
  let timeAgoString;
  if (years > 0) {
    timeAgoString = `(${years}y ago)`;
  } else if (months > 0) {
    timeAgoString = `(${months}mo ago)`;
  } else if (days > 0) {
    timeAgoString = `(${days}d ago)`;
  } else if (hours > 0) {
    timeAgoString = `(${hours}h ago)`;
  } else if (minutes > 0) {
    timeAgoString = `(${minutes}m ago)`;
  } else {
    timeAgoString = `(${seconds}s ago)`;
  }

  // Return the formatted date with "ago" part
  return formattedDate + " " + timeAgoString;
}

export function extractYear(dateString: string) {
  const parts = dateString.split("-");
  const year = parts[2];
  return year;
}
