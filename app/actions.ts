"use server";

export async function addPost(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());

  await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formDataObject.name,
      text: formDataObject.message,
    }),
  });
}
