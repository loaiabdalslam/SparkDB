## Description
SparkDB is an extended-hashmap-based database architecture object that aims to provide securely-isolated and fast database object.

## Features
* **It's not network-based.**
Your application is the only way to communicate to the database object. This means that no one except your application can access to this object with its commands.
* **It's fast.**
Because there isn't any network interaction, a normal *get* command can take 0.01ms up to 0.2ms depending on which environment you'll use to operate your code.
* **It's simple.**
Both Implementation and the stored-data format are really simple! Just store your data in **CSV** and define the database object in your code.
* **It works!**
Nothing is complicated. Two lines is all you need.
* **Custom Input enhances security!**
I don't know if you're reading from a file directly or you're going to give me a String. But I know that I have to put all options to you to fit your needs.
What if you decided *hypothetically* to encrypt that file? Then, decrypt it and throw it to us as a plain String, we'll do the rest.
* **Updates!**
Since This is a developing project, a lot of updates that will enhance performance are on the way!

## CSV Syntax
```
"id","user","pass"
"0","morad","ali"
```

## Usage
1- Define the object through `SparkDB db = new SparkDB();`.<br>
2- read data through `db.readfromfile(filename)` or `db.readfromString(string)`, based on your needs.
#### Adding queries
If you have 3 columns in your table, make a `String[]` that has the data with length of 3 elements.
Example: You'll add `new String[] {"0","morad","simp"}` to a table that has **ID,Username,Password**. *Deleting queries is the same.*
#### Getting values
If you want to get what user has an ID value of 0 , You can do it with `db.get("id","0","user")`
#### Getting multiple values
If two users have the same id, You can call `db.multiget("id","0","user")` to get the both users
#### Print the DB
If you want *hypothetically* to write the changes to the file again, you can do it with `db.print()` and it will return a String which is the updated DB

## Tests
This software was tested in OpenJDK Runtime Environment GraalVM CE 21.1.0 (build 11.0.11+8-jvmci-21.1-b05).
#### Performance
CSV file details:
* 3 Columns , 1000 rows

JVM:
* Process : 1.342436833 ms
* Get : 0.026370710999999998 ms
* Add : 0.0031770590000000003 ms
* MultiGet : 0.109891479 ms
* Delete : 0.074490905 ms
* Print : 13.214214717 ms

On Native ELF, speed is 10x faster.
