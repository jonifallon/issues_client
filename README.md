[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

_________________________________
SYNOPSIS
_________________________________

The Issues & Outages log is a portal which displays current issues in the IT environment which may impact a user's ability to perform tasks in affected applications.

_________________________________
MOTIVATION
_________________________________

Providing users with an easy to read, up-to-date listing of known issues can save time and reduce calls to a company's Help Desk.  Users can check back to get updates during an extended outage.

_________________________________
ERD
_________________________________

The ERD for the scope of Project II is fairly straightforward; two tables with a one-to-many relationship.

ADMINSTRATORS            ISSUES
PK ID                    PK ID
email					 Product
						 Issue Description
						 Notes
						 FK Administrators ID


--------------------------------
FUTURE ENHANCEMENTS
________________________________

The potential for adding additonal features exists.  A few thoughts on adding one or more features for Capstone could include:
- Adding a "This is happening to me, too" button which could be selected by users.  By clicking the button, users would become alerted when the issue was resolved (via text or email).
- Adding geo-location information for users who click the "This is happening to me, too" button.  Track from where users are selecting that button and display with "pins" on a map.  That would give a visual representation of where issues are impacing users from a geographical perspective.  This could potentially become helpful when troubleshooting issues.

