import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Message({
  title,
  content,
  linkNext,
  titleButton,
}: {
  title?: string;
  content?: string;
  linkNext: string;
  titleButton?: string;
}) {
  return (
    <div>
      <div className="p-10 w-[500px]">
        <h1 className="text-3xl font-bold size-10 w-full">{title}</h1>
        <p className="text-xl font-semibold text-[#777E90] py-2">{content}</p>
        <Button size={"lg"}>
          <Link style={{ textDecoration: "none" }} href={linkNext}>
            {titleButton}
          </Link>
        </Button>
      </div>
    </div>
  );
}
