import React from "react";
import {
  Button,
} from "@blueprintjs/core";

const Header = () => (
  <header className="items-baseline h-24">
        
        {/* P Header */}
        <p className="text-left text-white font-bold mt-8 ml-8 text-base">
            Make Predictions Publicly
        </p>
        <p className="text-left text-white ml-8 text-base">
            a platform to post, make and share your Predictions
        </p>
        {/* P Header */}


        {/* Sing Up User */}
        <div
        className="text-left text-white ml-8 text-base py-3"
        style={{ width: "253px" }}
        >
            <div
                className="p-1 bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
            >
                <Button
                className="flex rounded-full bp3-intent-primary uppercase px-2 py-1 text-xs font-bold mr-3"
                icon="user"
                />
                <span
                className="font-semibold mr-2 text-left flex-auto py-2"
                icon="user"
                >
                Sing Up twitter
                </span>
                <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
            </div>
        </div>
        {/* Sing Up User */}

  </header>
);

export default Header;
