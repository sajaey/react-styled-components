import React from 'react';
import styled from 'styled-components';
import SingleImage from './Image.js';
const feedsource = [
  {
    source:'https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/c122.0.313.313a/93269548_2626147607710073_6674363517433927117_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Dr8gFJXSA_UAX9t7wQA&oh=f4ea2d8af261c21092d9213eb3ef3ef9&oe=5EC2B881 ',
    likes: '43',
    comments: '3',
    isVideo: false,
    id: 0,
  },
  {
    source:'https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/c122.0.313.313a/93269548_2626147607710073_6674363517433927117_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Dr8gFJXSA_UAX9t7wQA&oh=f4ea2d8af261c21092d9213eb3ef3ef9&oe=5EC2B881 ',
    likes: '313',
    comments: '10',
    isVideo: true,
    id: 1,
  },
  {
    source:'https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/c122.0.313.313a/93269548_2626147607710073_6674363517433927117_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Dr8gFJXSA_UAX9t7wQA&oh=f4ea2d8af261c21092d9213eb3ef3ef9&oe=5EC2B881 ',
    likes: '29',
    comments: '2',
    isVideo: false,
    id: 2,
  },
  {
    source:'https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/c122.0.313.313a/93269548_2626147607710073_6674363517433927117_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Dr8gFJXSA_UAX9t7wQA&oh=f4ea2d8af261c21092d9213eb3ef3ef9&oe=5EC2B881 ',
    likes: '18',
    comments: '2',
    isVideo: false,
    id: 3,
  },
  {
    source:'https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/c122.0.313.313a/93269548_2626147607710073_6674363517433927117_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Dr8gFJXSA_UAX9t7wQA&oh=f4ea2d8af261c21092d9213eb3ef3ef9&oe=5EC2B881 ',
    likes: '30',
    comments: '4',
    isVideo: false,
    id: 4,
  },
];
const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;
const ProfileDetails = styled.div`
  display: flex;
`;
const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
const HeadingThreeText = styled.h3``;
const ParagraphText = styled.p`
  margin-right: 25px;
`;
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;
const ProfileDetailsName = styled.div`
  text-align: left;
`;
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
function Profile() {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        </ProfileDetailsLeft>
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>yomieluwande</HeadingThreeText>
            <EditProfileButton>Edit profile</EditProfileButton>
          </ProfileDetailsUsername>
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>5</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
          <ProfileDetailsName>
            <ParagraphText>
              <strong>Yomi</strong>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
      <ImagesWrapper>
        {feedsource.map(item => (
          <SingleImage image={item} key={item.id} />
        ))}
      </ImagesWrapper>
    </ProfileContainer>
  );
}
export default Profile;