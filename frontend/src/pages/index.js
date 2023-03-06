import { Button } from "@chakra-ui/react";
import useSocialMediaContract from "hooks/useSocialMediaContract";
import { ethers } from 'ethers';

export default function Home() {

  const socialMediaContract = useSocialMediaContract();

  console.log(socialMediaContract);

  const uploadPost = async (e) => {
    const description = ethers.utils.formatBytes32String("this is desc");
    const url = ethers.utils.formatBytes32String("this is url");
    const typeOfMedia = 1;

    const tx = await socialMediaContract.createPost(description, url, typeOfMedia);
    console.log(tx);
  }

  return (
    <>
      <Button onClick={uploadPost}>Create post</Button>
    </>
  )
}