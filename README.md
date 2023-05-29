# Lab 8 - Starter

Andrew Pan

1. I would put automated tests in your Recipe project development pipeline within a Github action that runs whenever code is pushed. This is so we can run tests every time we push and make changes to our code in our Github repo, and ensure that tests are passing not just locally. 
2. No
3. No, a unit test wouldn't test a messaging feature too well as there are many parts so it wouldn't be consistent or test it correctly. 
4. Yes, a unit test would be appropriate here since we are testing a specific messaging feature, namely if the length of the message is more than 80 characters. 