import praw
import pandas as pd
 
reddit_read_only = praw.Reddit(client_id="IWeO_iQbrxtz3sdXNIIRmg",         # your client id
                               client_secret="fSNM0MA1OZLYPaPrMGu-MUrK28-fnA",      # your client secret
                               user_agent="Daan Matheeuwsen")        # your user agent
 
 
subreddit = reddit_read_only.subreddit("malementalhealth")
 
posts = subreddit.top(time_filter="day", limit=5)
# Scraping the top posts of the current month
 
posts_dict = {"Title": [], "Post Text": [],
              "ID": [], "Score": [],
              "Total Comments": [], "Post URL": []
              }

for post in posts:
    # Title of each post
    posts_dict["Title"].append(post.title)
     
    # Text inside a post
    posts_dict["Post Text"].append(post.selftext)
     
    # Unique ID of each post
    posts_dict["ID"].append(post.id)
     
    # The score of a post
    posts_dict["Score"].append(post.score)
     
    # Total number of comments inside the post
    posts_dict["Total Comments"].append(post.num_comments)
     
    # URL of each post
    posts_dict["Post URL"].append(post.url)
    print(post) 
# Saving the data in a pandas dataframe
top_posts = pd.DataFrame(posts_dict)
print(top_posts)
