import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import type {Post} from "@blog/shared-types";

export function Index() {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')


  useEffect(() => {
    fetch(`http://localhost:3333/api/search?q=${searchTerm}`)
      .then(res => res.json())
      .then(res => setPosts(res.posts))
  }, [searchTerm])

  const onSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value)
    }, [searchTerm])

  return (
    <div>
      <input
        type="search"
        placeholder="Search Post Here"
        onChange={onSearchChange}
      />

      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>

    </div>
  );
}

export default Index;
