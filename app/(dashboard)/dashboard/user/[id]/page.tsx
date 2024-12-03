"use client";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div>User Profile: {id}</div>;
};

export default page;
