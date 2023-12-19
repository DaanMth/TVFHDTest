import praw
import pandas as pd

# Initialize the Reddit connection with your credentials
reddit_read_only = praw.Reddit(client_id="IWeO_iQbrxtz3sdXNIIRmg",         # your client id
                               client_secret="fSNM0MA1OZLYPaPrMGu-MUrK28-fnA",      # your client secret
                               user_agent="Daan Matheeuwsen")        # your user agent

# Access the subreddit
subreddit = reddit_read_only.subreddit("malementalhealth")

# Scraping the top posts
posts = subreddit.hot(limit=50000)

# Dictionary to store the posts' data
posts_dict = {"Title": [], "Post Text": [],"Post URL": []}

post_count = 0

# Loop through the posts and collect data
for post in posts:
    # Check if the post's flair matches the desired flair
    if ((post.link_flair_text == "Vent" or post.link_flair_text == "Seeking Guidance")
    and len(post.selftext) >= 350
    and len(post.selftext) <= 1000
    and len(post.title) <= 200
    and "youtube" not in post.url.lower()
    and "youtu.be" not in post.url.lower()
    and "i.redd.it" not in post.url.lower()):
        posts_dict["Title"].append(post.title)
        posts_dict["Post Text"].append(post.selftext)
        posts_dict["Post URL"].append(post.url)
        post_count += 1

    if post_count >= 120:
            break




# Convert the data into a pandas DataFrame
top_posts = pd.DataFrame(posts_dict)

# Convert the DataFrame to JSON and save it to a file
top_posts.to_json("top_posts.json", orient="records")

# If you want to print the DataFrame, you can uncomment the next line
print(top_posts.count())
