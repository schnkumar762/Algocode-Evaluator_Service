### Message queue

case of multiple queue

payment module

when payment is done, send email to user

1. email service
2. payment service

when payment is done , you want to send email to the user.

when payment is done, you add an emailing job to the queue and the email service will pick the job from the queue and send the email.

producer is a piece of code.
consumer is a piece of code.

which will interacting with one or more than one queue... as per requirement..

you dont need 2 queues necessarily,,

1 que may have multiple job .. it may like req job , res job
