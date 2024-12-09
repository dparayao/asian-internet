// content/researchContent.js

export const researchContent = {
    research: {
      id: 'research',
      title: 'Research Statement',
      content: [{
        text: `How has Asian-influenced internet language evolved from early internet spaces to modern platforms, and how does its usage reflect broader patterns of cultural appropriation, identity formation, and aesthetic adoption in digital spaces?\n
        1. How have terms like "ABG" (Asian Baby Girl) evolved from their original contexts?
        2. How do different communities (Asian vs non-Asian) use and perceive these terms?
        3. How did the Asian diaspora in the early 2000s adapt and create internet language to
           express their identities?
        4. How does the co-option or appropriation of subcultural language by mainstream
           groups affect its original communities?`
      }]
    },
    platform: {
      id: 'platform',
      title: 'Platform Selection & Data Identification',
      content: [{
        text: ` I chose to analyze data from Reddit because the subreddit feature allows me to examine data from specific communities. Looking at r/asianamerican and r/aznidentity allows me to examine Asian American internet slang trends from the perspective of those who belong to the online Asian American community, which is helpful as online data doesn’t provide users’ ethnicity. I would also like to note that I am looking at this data from a Southeast Asian-American and East Asian-American perspective, as these communities influenced my Asian-American slang growing up.
  
  I was able to find this data (Pushshift, 2023) publicly from Reddit user u/pushshift, who scraped and uploaded comments and submissions from the top 40k subreddits, in the date range of 2005-2023. I also followed the provided instructions on using Python to create CSV files out of r/asianamerican and r/aznidentity subreddits’ comments, and used OpenRefine to clean up the dataset to create a CSV file with only comments containing my desired terms. This allowed me to reduce r/asianamerican’s data from 616,908 comments to 8,778 comments and r/aznidentity’s data from 1,254,479 comments to 20,367 comments, which greatly reduced the processing time and power to create my visualizations.
  
  In addition to data from ReddIn addition to data from Reddit, for the slang term “ABG” specifically, I chose to data scrape from Twitter and TikTok as the data from Reddit is limited by the subreddit’s creation date. This means that since r/asianamerican was created in January 2010 and r/aznidentity was created in November 2015,  I’m limited by those years to analyze the data. Twitter’s data allows me to analyze the term’s trends from an earlier point of time, as Twitter was created in 2006. However I also decided to supplement the data from scraping TikTok, as there were too many users with “ABG” in their handle to easily make sense of the Twitter data from 2017-2023. TikTok was created in 2016 and thus covers the analysis from a more modern perspective. As this data isn’t constrained by a certain community like subreddits, this data might not necessarily reflect the sentiments of the Asian American community but does provide some insight into how more mainstream groups adopted and used the term “ABG”.it, for the slang term "ABG" specifically, I chose to data scrape from Twitter and TikTok as the data from Reddit is limited by the subreddit's creation date.
  
  The Twitter dataset (Custom Twitter Dataset, 2023) was created using an Apify data scraper with the search terms “ABG”, “asian baby girl” and “asian baby gangster”, and ran twice from time periods 2006-2011 and 2011-2017 for 500 tweets. Similarly, The TikTok dataset (Custom TikTok Dataset, 2023) was created using an Apify data scraper with the search terms “ABG”, “asian baby girl” and “asian baby gangster”, and ran from the time period 2017-2023.
  `
      }]
    },
    findings: {
      id: 'findings',
      title: 'Data Findings & Analysis',
      content: [
        { 
          title: 'Scores',
          image: 'score_comparison',
          text: `
  This visualization is based off of Reddit’s “upvote” and “downvote” system, showing the average score for each term across different time periods in r/asianamerican and r/aznidentity. A higher amount of upvotes might not necessarily mean a positive view of the term but might also mean a higher engagement for comments with that term. 

  The r/asianamerican community has higher engagement overall, but especially with identity terms suggesting that the subreddit has a balanced interest in both identity and cultural discussions. Meanwhile, r/aznidentity has more sporadic engagement patterns, which appear to be more controversial and might indicate popular concerns within the online Asian-American community. 

  As for select terms, “White washed” has a higher engagement rate in r/aznidentity, indicating that it is a popular, controversial topic. In both subreddits, “Boba” has shown periodic spikes and “FOB” has had declining engagement overtime.

`
        },
        {
          title: 'Frequency',
          image: 'azn_frequency',
        },
        {
          image: 'asian_frequency',
          text: `
  Although I primarily use frequency in cross-analysis with sentiment and score to help determine the validity of the analysis (with terms that have a greater frequency being more reliable in determining the community’s feelings), across the two subreddits, there are interesting frequency patterns. For example, the decline and rise of certain identity terms showcase how the online communities adopt different acronyms over time to describe themselves. Additionally, the spike in conversations surrounding “ABG” in 2020-2021 aligns with the rise of TikTok and thus “ABG style” makeup tutorials on the platform. Having similar trends for different terms that serve the same purpose across the platforms also tell us that the popularity of the term might not be decreasing/increasing, just that discussions surrounding or involving the term are.          `
        },
        {
          title: 'Sentiment',
          image: 'sentiment_comparison',
          text: `
  The sentiment analysis is based on NLTK (Natural Language Toolkit) sentiment scores, which range from -1.0 (most negative) and 1.0 (most positive). These scores are affected by the word choice, vocabulary, presence of negation words, and sentence structure present in the comment that features the slang term. The average sentiment score may not reflect the community’s overall sentiment towards the term and those who identify with it, but may reflect the community’s sentiment towards discussions around the term as well.

  Comparing the two subreddits, r/asianamerican has more moderate sentiment scores, while r/aznidentity tends to have more polarizing sentiment scores - this indicates different values within the two subreddits. Although traditional identity terms tend to have more stable sentiment patterns, the volatile sentiment patterns for slang terms in both of the communities suggest an ongoing negotiation of term meanings and appropriateness.          `
        },
        {
          title: 'Across Subreddits',
          image: 'azn',
        },
        {
          image: 'asian',
          text: `
  The sentiment analysis is based on NLTK (Natural Language Toolkit) sentiment scores, which range from -1.0 (most negative) and 1.0 (most positive). These scores are affected by the word choice, vocabulary, presence of negation words, and sentence structure present in the comment that features the slang term. The average sentiment score may not reflect the community’s overall sentiment towards the term and those who identify with it, but may reflect the community’s sentiment towards discussions around the term as well.

  Comparing the two subreddits, r/asianamerican has more moderate sentiment scores, while r/aznidentity tends to have more polarizing sentiment scores - this indicates different values within the two subreddits. Although traditional identity terms tend to have more stable sentiment patterns, the volatile sentiment patterns for slang terms in both of the communities suggest an ongoing negotiation of term meanings and appropriateness.          `
        },
        {
          title: 'How did the Asian diaspora from the 2000s to early 2020s adapt and create internet language to express their identities?',
          text: `
  There are many studies demonstrating how diaspora youth use language to "enact identities" and "negotiate aspects of their migration experience". This includes code-switching or using AAVE to align with certain identities or challenge stereotypes, as seen in research by Shankar (2011). Similarly, Dich (2012) explains online communities allowed Asian diaspora to construct an Asian American identity and form digital ethnic enclaves that allowed them to reject stereotypes and claim both Asian and American identities.

  Thus, we can extend this idea of language forming diaspora identities in youth to understanding how the Asian diaspora used internet language within online communities to create and express their identities from the 2000s to early 2020s. 

  We see the creation of online ethnic enclaves reflected in the creation of internet slang terms, as only those belonging to this community of Asian diaspora would be able to understand and correctly use these terms online. The continual use of these slang terms online and propagation to real life (through word of mouth, YouTube, TikTok) over time as shown in the visualizations has indicated that Asian-Americans have successfully developed widely used internet language to express their identities, allowing other Asian Americans to cultivate their own understanding of their cultural identity by engaging in online spaces. 

  Additionally, the trends of various identity terms across subreddits and time periods highlight how the online Asian diaspora has adopted sustaining terms to describe themselves. For example, Salinas and Trazo (2023) state that "AZN" was used in the 1990s and 2000s in reference to Asian American pride movements, and was propagated through early internet platforms such as AOL Instant Messenger, chatrooms, MySpace, Friendster and Xanga. Our frequency visualizations demonstrate that “AZN” and other terms created during that era such as “FOB” have sustained over time as they are still used in online communities today.

  Finally, according to our visualizations, the meanings and sentiments of these slang words change with the adoption of new media. For instance, Salinas and Trazo (2023) explain how the mainstreaming of the ABG aesthetic through platforms like TikTok highlights how this term has been adapted by the Asian diaspora to have a different meaning over time.
        `
        }
      ]
    },
    casestudy: {
      id: 'casestudy',
      title: 'Case Study: ABG',
      content: [
        {
          title: 'Twitter 2006-2017 Data',
          component: 'twitter',
          text: 'While I did also scrape 500 tweets from 2006-2011, the correlation between those tweets and my intended meaning of the slang term “ABG” or “Asian Baby Girl” wasn’t strong enough to use it in my data, as Twitter was still very new and most tweets consisted of people talking about their Asian babies. However, here are some tweets from that time period that reflected the sentiment people held towards “ABG”.'
                },
        {
          title: 'Twitter 2011-2017 Word Cloud',
          text: <iframe
            style={{width: '100%', height: '252px'}}
            src="https://voyant-tools.org/tool/Cirrus/?stopList=keywords-ed0b1fc80107e2f67478407a99d86320&corpus=46b225d74d11989e9588755b6787baf8"
            title="Voyant Tools Word Cloud"
            frameBorder="0"
          />
        },
        {
          title: 'r/asianamerican Word Cloud',
          text: <iframe
            style={{width: '100%', height: '252px'}}
            src='https://voyant-tools.org/tool/Cirrus/?stopList=keywords-9636ba5727c4b49a1a6d754401ae7c89&corpus=16e5d554ee657afea3260f71f11ab2f3'
            title="Voyant Tools Word Cloud"
            frameBorder="0"
          />
        },
        {
          title: 'r/aznidentity Word Cloud',
          text: <iframe
            style={{width: '100%', height: '252px'}}
            src='https://voyant-tools.org/tool/Cirrus/?stopList=keywords-6385fe53df3859be05406cb63542c2e7&corpus=1459473c9f68040dbb2c8ba4c078d3d6'
            title="Voyant Tools Word Cloud"
            frameBorder="0"
          />
        },
        {
          title: 'Twitter 2017-2023 Word Cloud',
          text: <iframe
            style={{width: '100%', height: '252px'}}
            src='https://voyant-tools.org/tool/Cirrus/?stopList=keywords-9e28bb26157d40ef08c2cfa07c260533&visible=100&corpus=868cd7f6d31d44952882003e7f5a05d3'
            title="Voyant Tools Word Cloud"
            frameBorder="0"
          />
        },
        {
          title: 'TikTok Word Cloud',
          text: <iframe
            style={{width: '100%', height: '252px'}}
            src='https://voyant-tools.org/tool/Cirrus/?stopList=keywords-b52f5afc14a365964650acfc534991ef&corpus=e87be0887da0fa9532b73ada512b0db2'
            title="Voyant Tools Word Cloud"
            frameBorder="0"
          />
        },
        {
          title: 'How have terms like "ABG" (Asian Baby Girl) evolved from their original contexts?',
          text: `
  We can use “ABG” as a case study for Asian diaspora internet slang and explore how “ABG” has evolved from its original context by looking at these word clouds from a temporal based point of view. 

  These word clouds were created in Voyant using 500 tweets from 2011-2017, 500 tweets from 2017-2023 (Custom Twitter Dataset, 2023), 500 posts from TikTok (Custom TikTok Dataset, 2023) and comments from r/asianamerican and r/aznidentity (Pushshift, 2023) from a separate CSV file that only contained posts that had “ABG” or “Asian Baby Girl”. For the Twitter word clouds it’s important to note that Jungkook came out with a song called 3D in 2023 that had the word “ABG”, sparking conversations around the term on twitter.

  The 2011-2017 Twitter word cloud associates “ABG” with “gangster” and “hot”, and with popular Asian diaspora terms like “boba”. However, similar to the 2006-2011 Twitter data from my Custom Twitter Dataset (2023)", it still highly associates it with the word “adopt”, indicating that people still discussed the term in the context of adopting babies.

  We can look at r/aznidentity and r/asianamerican word clouds to see that more cultural and identity related terms are associated with “ABG”, such as “American”, showing that people in this community viewed it as an American concept. Additionally, terms such as “think” and “people” suggest that there are discussions about the meaning of this term.

  The Tiktok and 2017-2023 Twitter word clouds demonstrate a clear shift in the word being an identifier to a commodified aesthetic with words such as “makeup”, “hairstyle”, “viral”, and “fashionista”. 
          `
        },
        {
          title: 'How does the co-option or appropriation of subcultural language such as “ABG” by mainstream groups affect its original communities?',
          text: `
  In the context of “ABG”, we can analyze our word clouds to see how the rise of TikTok has allowed mainstream groups to adopt this term and turn it from an identity marker to a commodifiable aesthetic.

  “The Asian Baby Girl (ABG) Through a Filipina American Lens” highlights how this commodification has affected its original community that created the term, which the author traces back to sister gangs created out of underfunded BIPOC urban spaces where East Asian and Southeast Asian refugees settled. According to Salinas and Trazo (2023), “Filipinas and other Southeast Asian women who were part of these gangs were also mingling and sharing space and coalitions with Chicana and Black sister gangs” and thus heavily borrowed aesthetics from these communities as well.

  As it became popular, the ABG look spread through commercial media such as the Fast and Furious franchise and the For Him magazine, turning ABGs into 2D portrayals for the male gaze. Salinas and Trazo (2023) argue these media “obscure the real issues that Asian American women were facing on the ground in the streets of neglected Asian American communities of California like Los Angeles, San Diego and their issues within underfunded but heavily policed communities, their lack of public education and health resources, and the real sexual violence they experienced as sexual accessories in some of these gang circles also went unheard while their images onscreen became more remakes of America’s fascination with the oversexed Asian woman”.

  With TikTok, ABG has been transformed from a subculture to an aesthetic describing Asian girls who get their nails done, drink boba and go to nightclubs, while participating in global consumerism such as fast-fashion. Salinas and Trazo (2023) also say, “the ABG asserts her hyperfemininity and hypersexualization through her cultural consumption and, borrowing the term Jillian Hernandez uses to describe the Latina ‘chonga’, ‘aesthetic excess’”. We see this trend reflected in our word clouds, as associated words change from “gangster” and “hot” to “makeup” and “viral”. 

  Additionally, while these word clouds feature Asian ethnicities, they primarily associate ABG with East Asian ethnicities such as “Korean” or “Chinese”, rather than Southeast Asian ethnicities. We also see in the TikTok word cloud the term “Douyin” which is considered the “Chinese Version of TikTok”, showing the adoption of ABG by an international East Asian audience. Such associations contribute further to the fetishization of East Asian women and the erasure of Southeast Asian women in popular culture. This association is also harmful considering the term ABG originated from Southeast Asian women like Filipinos and Vietnamese women living in underserved urban spaces, and became a positive aesthetic when East Asian women adopted it online.
          `
        }
      ]
    },
    conclusion: {
      id: 'conclusion',
      title: 'Conclusion',
      content: [{
        title: 'How has Asian-influenced internet language evolved from early internet spaces to modern platforms, and how does its usage reflect broader patterns of cultural appropriation, identity formation, and aesthetic adoption in digital spaces?',
        text: `
  Internet slang terms such as “AZN”, “FOB” and “ABG” were created by the Asian diaspora in the early 2000s and spread through online platforms such as Xanga, helping form online ethnic enclaves for Asian American youth. Our visualizations analyzing r/asianamerican and r/aznidentity demonstrate how such slang has become part of Asian American online identity.

  Platforms such as TikTok have allowed mainstream audiences to participate in internet slang. As shown in our case study of “ABG”, online platforms allow global audiences to adopt aesthetics without consequences, as seen by “ABG’s” trajectory from an identity marker to a style that erases its origins from a subculture of Southeast Asian women in underserved urban communities. As a result, “ABG”, similar to other languages created by marginalized groups such as AAVE, has become a trend for global audiences to consume.

  Although Asian Americans have successfully created their own language to express their diasporic identities and create ethnic enclaves online, the appropriation of certain terms as they enter mainstream digital spaces negatively impact their original communities. While it’s natural for the meaning and sentiment of terms to change over time as different audiences are introduced to them, Asian American slang offers an interesting study as it encapsulates what it means to be an Asian diaspora youth negotiating your identity while growing up in the Age of the Internet of Things.
        `
      }]
    },
    references: {
      id: 'references',
      title: 'References & Citations',
      content: [{
        title: 'References & Citations',
        text: `Dich, L. (2012). Community Enclaves and Public Imaginaries: Formations of Asian American Online Identities. Department of English, Miami University Middletown.

Shankar, S. (2011). Asian American Youth Language Use: Perspectives Across Schools and Communities. Northwestern University.

Salinas, S. A. B., & Trazo, T. A. A. (2023). The Asian Baby Girl (ABG) Through a Filipina American Lens. Alon: Journal for Filipinx American and Diasporic Studies, 3(1), 76-87.

Reddit Data:
Pushshift. (2023). Reddit Comments Dataset [Data set]. Retrieved from Reddit user u/pushshift archive covering r/asianamerican (616,908 comments) and r/aznidentity (1,254,479 comments) from 2005-2023.

Twitter Data:
Custom Twitter Dataset. (2023). ABG-related tweets [Data set]. Scraped using Apify from two time periods (2006-2011 and 2011-2017), collecting 500 tweets per period using search terms "ABG", "asian baby girl" and "asian baby gangster".

TikTok Data:
Custom TikTok Dataset. (2023). ABG-related TikTok posts [Data set]. Scraped using Apify from 2017-2023 using search terms "ABG", "asian baby girl" and "asian baby gangster".
`
      }]
    },
    about: {
      id: 'about',
      title: 'About',
      content: [{
        title: 'About the Author',
        text: `Hi! I'm Dagny, a fourth year at UCLA majoring in computer science - a field I'm passionate about due to its opportunities for creative problem solving and connecting with others. So far I've been given the chance to learn about and work with various apis, cloud deployment, user interfaces, AI/ML learning, and websites for school-wide events.\n
I'm also passionate about expanding accessibility to technology and education - computer science should be a field concerned not only with the future it can build, but the community it builds a future for.\n
`,
        links: [{
          text: 'LinkedIn',
          url: 'https://www.linkedin.com/in/dagnyparayao/',
          style: 'text-black transition-colors duration-200 hover:text-[#DA85A1] active:text-[#DA85A1] focus:text-[#DA85A1] focus:outline-none'
        }]
      },
      {
        title: 'About the Project',
        text: `My research question for this project was inspired by my experience with the slang word ABG - growing up in the 2000s and 2010s, it meant an Asian gangster. However I was surprised one day when my friend told me she wanted to become a "Douyin ABG" instead of an "American ABG". Since then, I've been curious about how this slang term, and other similar Asian internet slang have continued to be used throughout time and have been transformed in meaning.
\nI used Python to create the visualizations and export the subreddit data into CSVs, and OpenRefine to clean up the data to be used in Voyant visualizations. This webpage was designed in Figma and created using React and Tailwind.`
      }]
    }
  };