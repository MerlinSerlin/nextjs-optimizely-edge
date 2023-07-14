export const config = {runtime: 'edge'}

export async function updateEdgeConfig(datafile) {
  const edgeConfigID = process.env.EDGE_CONFIG_ID;
  const vercelAPIToken = process.env.VERCEL_API_TOKEN;
  const teamID = process.env.VERCEL_TEAM_ID;

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/edge-config/${edgeConfigID}/items?teamId=${teamID}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${vercelAPIToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              operation: 'upsert',
              key: 'optimizely',
              value: datafile
            },
          ],
        }),
      },
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
  