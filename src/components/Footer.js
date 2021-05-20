import { Button, Tooltip } from "@material-ui/core";
import React from "react";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  const twitterLink =
    "https://twitter.com/intent/tweet?text=Check%20out%20loficlub.now.sh%20by%20@SavioMartin7%E2%9A%A1%EF%B8%8F%0D%0A%0AThe%20best%20place%20to%20enjoy%20Hip%20hop%20beats%20to%20Relax%20or%20Study!%20%F0%9F%8E%A7%20Give%20it%20a%20try!%20You%27ll%20love%20it!%20%F0%9F%94%A5%0D%0A%0A%23lofi%20%23chillbeats";

  return (
    <div className="w-full px-5 py-3 dark:bg-[#222] flex items-center justify-between">
      <h1 className="text-lg Raleway font-medium text-[#222] dark:text-[#fafafa]">
        Built with 💖 by
        <a
          href="https://twitter.com/saviomartin7"
          className="mx-1 font-extrabold cursor-pointer Raleway hover:text-[#8e54e9] duration-500"
        >
          Savio Martin
        </a>
        and
        <a
          href="/contributors"
          className="ml-1 font-extrabold cursor-pointer Raleway hover:text-[#8e54e9] duration-500"
        >
          Contributors
        </a>
      </h1>
      <div className="flex items-center">
        <Tooltip title="Buy Me A Coffee" arrow>
          <a
            href="https://buymeacoffee.com/saviomartin"
            target="_blank"
            rel="noreferrer"
            className="ml-1 items-center bg-[#24292E] hover:bg-[#222] rounded-md relative cursor-pointer flex"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              className="h-[42px]"
              alt="Buy Me A Coffee"
            />
          </a>
        </Tooltip>
        <Tooltip title="Share to Twitter" arrow>
          <a
            href={twitterLink}
            target="_blank"
            rel="noreferrer"
            className="ml-1 items-center bg-[#1A91DA] hover:bg-[#0F84B4] rounded-md relative cursor-pointer hidden lg:flex py-1"
          >
            <Button className="track flex twitterBtn">
              <div className="flex items-center justify-center text-md text-[#F0E9E2] duration-300 capitalize">
                Share on Twitter
                <FiTwitter className="ml-1" />
              </div>
            </Button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Footer;
