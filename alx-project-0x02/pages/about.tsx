export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        About Us Page
      </h1>
    </div>
  );
}
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold mb-6">About Us Page</h1>

      <Button size="small" shape="rounded-sm" title="Small Rounded" />
      <Button size="medium" shape="rounded-md" title="Medium Rounded" />
      <Button size="large" shape="rounded-full" title="Large Rounded" />
    </div>
  );
}

