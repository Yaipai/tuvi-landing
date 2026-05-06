export const GET = () => {
  const body = `User-agent: *
Allow: /
Disallow: /m/
Disallow: /s/
Disallow: /r/
Disallow: /.well-known/
Sitemap: https://tuvi.education/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
