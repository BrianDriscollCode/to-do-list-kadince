
# Kadince To-do Application 

##Requested features and my implementation: 

1. Create a new to-do item (Complete) - Able to add items by typing in text and clicking the "+" sign button.

2. Edit a to-do item (Complete)
  A) Click on the **text** itself to open up text input and autofocus
  B) Click on the **edit button** to open up text input and autofocus
  C) Press **enter** or click the **edit button** to submit changes

3. Delete a to-do item (Complete) - Click on the delete button to delete a task

4. Complete a to-do item (Complete) - Click on the "pending" or "complete" status to change status

5. Filter using "complete" or "pending" or "all (Complete) - Use the dropdown to see which tasks are complete, pending, or see both.

6. Deploy Application (Complete) 

##Extra

Extra #1: Added a navbar and sidebard just to give it a feeling that it is being developed into a full application.

Extra #2: Added responsiveness. It could use a couple more waves of responsiveness, but I did what I could within the time constraints of my current development work.

Extra #3: Used some branding colors via the Kadince website and pulled off the artwork to mimic the branding.

##Summary 

I'm confident that the application works for all the requirements. There were a few hiccups as I accidently used index as a key at first (don't know why), but then I used UUID to remedy my mistake to create unique ID's for each element. In the future, I would use index + text for a unique ID key, but it seems that UUID solution works to but requires an added library. 

Instead of using a table or too much flex box, I decided to implement with CSS Grid. I think Grid allows the most flexibility for creating dynamic layouts while aligning elements exactly where you want them. BUT, if I wanted to make it easier, I'd probably use tables. Grid is great, but it's weakness is getting exact layouts and things end up misaligning with different element and browser sizes.

***Why I delivered in only 2.5 days instead of using the full week

I don't want it to seem like I rush my work. But I am starting a project for a client today (10/13) in a framework I usually don't use, so I wanted to get this done before starting that project.

Really enjoyed building this application, thank you for the opportunity!
