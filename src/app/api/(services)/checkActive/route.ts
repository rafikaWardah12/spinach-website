let isActive = true;
export async function GET(req: Request) {
  return Response.json({
    active: isActive,
  });
}

export async function POST(req: Request) {
  isActive = (await req.json()).isActive;
  return Response.json(true);
}
