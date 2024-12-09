import React, { useEffect } from 'react';

const TwitterEmbed = () => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/BitchAlina?ref_src=twsrc%5Etfw">@Bitchalina</a> 
          ABG stands for Asian.Baby.Girl basically a Jagger but for really small,toe hang,stringy blonde haired Asians
        </p>
        &mdash; ++++ (@stenzo8_2) 
        <a href="https://twitter.com/stenzo8_2/status/25957465836?ref_src=twsrc%5Etfw">
          September 30, 2010
        </a>
      </blockquote>

      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          &quot;omg Coach Nam i just saw the hottest ABG(asian baby girl)&quot;- henry tran
        </p>
        &mdash; Nam Phan (@NamPhanMMA) 
        <a href="https://twitter.com/NamPhanMMA/status/20890095338917888?ref_src=twsrc%5Etfw">
          December 31, 2010
        </a>
      </blockquote>

      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/jamesLboyd?ref_src=twsrc%5Etfw">@JamesLBoyd</a> 
          I just saw your asian &quot;baby&quot; girl on state street hahahaa I bet she has a tattoo also.
        </p>
        &mdash; Jen DeLeon (@jen_deleon) 
        <a href="https://twitter.com/jen_deleon/status/48479402509598720?ref_src=twsrc%5Etfw">
          March 17, 2011
        </a>
      </blockquote>
    </div>
  );
};

export default TwitterEmbed;