# Read-only instance
reddit_read_only = praw.Reddit(client_id="IWeO_iQbrxtz3sdXNIIRmg",         # your client id
                               client_secret="fSNM0MA1OZLYPaPrMGu-MUrK28-fnA",      # your client secret
                               user_agent="Daan Matheeuwsen")        # your user agent
 
# Authorized instance
reddit_authorized = praw.Reddit(client_id="IWeO_iQbrxtz3sdXNIIRmg",         # your client id
                               client_secret="fSNM0MA1OZLYPaPrMGu-MUrK28-fnA",      # your client secret
                               user_agent="Daan Matheeuwsen",        # your user agent
                                username="Agitated-Print-3145",        # your reddit username
                                password="Matheeuwsen2015")    