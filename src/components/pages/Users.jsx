import React from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `りょうすけ-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "111@example.com",
    phone: "090-1111-2222",
    company: {
      name: "サンプル株式会社"
    },
    website: "https://example.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
