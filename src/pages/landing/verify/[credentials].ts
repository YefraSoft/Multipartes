import { getLinkUrl } from "../db";

export async function GET({ params, redirect }) {
  const { id } = params;
  const link = await getLinkUrl(id);

  if (!link) {
    return new Response(null, {
      status: 404,
      statusText: "No encontrado",
    });
  }

  return redirect(link, 307);
}
