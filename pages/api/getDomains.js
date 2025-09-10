export default async function handler(req, res) {
  const domains = [
    { name: "suleiman.doma", expires: "2025-09-15" },
    { name: "nigeria.doma", expires: "2025-09-20" }
  ];
  res.status(200).json(domains);
}
