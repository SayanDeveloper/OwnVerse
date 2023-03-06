import { useContract, useSigner } from "wagmi";
import SocialMedia from "../../abi/SocialMedia.json"

const useSocialMediaContract = () => {
    try {
        const { data: signer, isError, isLoading } = useSigner()
        const socialMediaContract = useContract({
            address: '0x4E5418bB3D5bFeb91182112d635f5a5de0c5E05e',
            abi: SocialMedia,
            signerOrProvider: signer,
          })
        return socialMediaContract;  
    }
    catch (error) {
        console.log(error);
        return
    }
}
export default useSocialMediaContract;