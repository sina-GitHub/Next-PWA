import Link from "next/link";

const data = [{refTo: "note1"}, {refTo: "note2"}, {refTo: "note3"}];

export default function Dynamic() {
  return (
    <div className="container">
      Dynamic...
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Link as={"/dynamic/" + item.refTo} href="/dynamic/[Routes]">
                <a>{item.refTo}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
