import { Button } from "@chakra-ui/react";
import useSocialMediaContract from "hooks/useSocialMediaContract";

export default function Home() {

  const socialMediaContract = useSocialMediaContract();

  console.log(socialMediaContract);

  const uploadPost = async (e) => {
    const tx = await socialMediaContract.createPost("this is desc", "this is url", 1);
    console.log(tx);
  }

  return (
    <>
      <Button onClick={uploadPost}>Create post</Button>
    </>
  )
}
