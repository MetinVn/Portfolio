import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container } from "../layouts/Container";

interface Repo {
  id: string;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export default function Portfolio() {
  const githubUsername = "MetinVn";
  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

  const getPinnedProjects = async (): Promise<Repo[]> => {
    const query = {
      query: `
        {
          user(login: "${githubUsername}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  url
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      `,
    };

    const res = await axios.post("https://api.github.com/graphql", query, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data.data.user.pinnedItems.nodes.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.url,
      description: repo.description,
      language: repo.primaryLanguage?.name || "Unknown",
    }));
  };

  const {
    data: repos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pinnedRepos"],
    queryFn: getPinnedProjects,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  if (isLoading) return <div className="text-whiteF p-6">Loading...</div>;
  if (error) return <div className="text-whiteF p-6">Error fetching pinned repositories</div>;

  return (
    <Container bottomLeftCorner={true} bottomLeftWidth={100} padding="p-10">
      <div className="flex flex-col items-start space-y-4">
        <ul className="mb-5 list-disc text-lg text-accentGray">
          <li>Portfolio</li>
        </ul>
        {repos &&
          repos.map((repo, index) => (
            <div key={repo.id} className="z-10 flex items-center justify-between w-full py-2">
              <div>
                <h1 className={`text-lg ${index === 0 ? "text-orange" : "text-whiteF"}`}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {repo.name}
                  </a>
                </h1>
                {repo.description && <p className="text-accentGray text-sm">{repo.description}</p>}
              </div>
              <span className="text-accentGray text-sm">{repo.language}</span>
            </div>
          ))}
        <a
          href={`https://github.com/${githubUsername}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 mt-10 text-lg text-orange font-medium border border-orange rounded-md px-6 py-3 transition-colors duration-300 hover:bg-orange hover:text-dark">
          Visit my GitHub for more projects
        </a>
      </div>
    </Container>
  );
}
