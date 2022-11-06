export default function PostsFetch({ posts }) {
  return (
    <main>
      {posts ? (
        <>
          {posts.slice(0, 5).map((dato, index) => (
            <article key={index}>
              <h3>
                {dato.id} - {dato.title}
              </h3>
              <p>{dato.body}</p>
            </article>
          ))}
        </>
      ) : (
        "No hay posts"
      )}
    </main>
  );
}
