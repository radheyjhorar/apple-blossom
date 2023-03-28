import { FacebookShareButton, FacebookIcon} from 'react-share';
const FBShareButton = ({ url, quotes, hashtag }) => {
return (
<>
  <FacebookShareButton
     url={url}     //eg. https://www.example.com
     quotes={quotes}  //"Your Quotes"
     hashtag={hashtag} // #hashTag
   >
    <FacebookIcon size={36} />
  </FacebookShareButton>    

</>
)

}

export default FBShareButton;