import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "yesterday",
      view: 23,
      author: { _id: 1 },
      _id: 1,
      description: "this is test data for robot",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskJt6vFLVOiCljW5NywCzxpLPGPejZwfS7g&s",
      category: "robot",
      title: "we robot",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup,
          <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote Pitches and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `search results for: ${query} ` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: nember) => (
              <StartupCard key={index} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
