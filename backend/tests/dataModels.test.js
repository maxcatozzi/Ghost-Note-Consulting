const mongoose = require("mongoose");
const blogPostModel = require("../models/blogpost.model");
const userModel = require("../models/user.model");
const blogPostData = { title: "testTitle", body: "test body" };
const userData = { username: "testUser-"+Math.random().toString().substring(2,9), password: "testPass" };


describe("blog post tests", () => {
	beforeAll(async () => {
    require('dotenv').config();

		await mongoose.connect(
			process.env.ATLAS_URI,
			{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
			(err) => {
				if (err) {
					console.error(err);
					process.exit(1);
				}
			}
		);
	});

	// test create new blog post
	it("creates new blog post", async function () {
		const validBlogPost = new blogPostModel(blogPostData);
		const savedBlogPost = await validBlogPost.save();
		expect(savedBlogPost._id).toBeDefined();
    expect(savedBlogPost.title).toBe(blogPostData.title);
    expect(savedBlogPost.body).toBe(blogPostData.body);
  });
  
  // test blog post creation without title
  it("creates new blog post without title should fail", async function () {
    const validBlogPost = new blogPostModel({body: "bodytest"});
    let saveErr;
    try {
      const savedBlogPost = await validBlogPost.save();
    } catch (err) {
      saveErr = err;
    }
    expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(saveErr.errors.title).toBeDefined();
  });
  
  // test blog post creation without body
  it("create new blog post without body should fail", async function () {
    const validBlogPost = new blogPostModel({title: "bodytest"});
    let saveErr;
    try {
      const savedBlogPost = await validBlogPost.save();
    } catch (err) {
      saveErr = err;
    }
    expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(saveErr.errors.body).toBeDefined();
  });
  
  // test blog post creation without proper title
  it("create new blog post without a title of minimum length 1 should fail", async function () {
    const validBlogPost = new blogPostModel({title: "", body: "bodytest"});
    let saveErr;
    try {
      const savedBlogPost = await validBlogPost.save();
    } catch (err) {
      saveErr = err;
    }
    console.warn(saveErr)
    expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(saveErr.errors.title).toBeDefined();
  });
  
  // test blog post creation with unneccesary field
  it("creates new blog post, but any field not defined in the schema should be undefined", async function () {
    blogPostData.date = "today";
    const blogPostInvalidField = new blogPostModel(blogPostData);
		const savedBlogPostInvalidField = await blogPostInvalidField.save();
    expect(savedBlogPostInvalidField._id).toBeDefined();
    expect(savedBlogPostInvalidField.date).toBeUndefined();
    expect(savedBlogPostInvalidField.title).toBe(blogPostData.title);
    expect(savedBlogPostInvalidField.body).toBe(blogPostData.body);
  });

  // test create new user
	it("creates new user", async function () {
		const validUser = new userModel(userData);
		const savedUser = await validUser.save();
		expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.password).not.toBe(userData.password);
  });

  // test create duplicate new user
	it("creates duplicate new user should fail", async function () {
    const validUser = new userModel(userData);
    let saveErr;
		try {
      const savedUser = await validUser.save();
    } catch (err) {
      saveErr = err;
    }
    expect(saveErr.name).toBe("MongoError");
    expect(saveErr.code).toBe(11000);
  });
  
  // test user creation without username
  it("creates new user without username should fail", async function () {
    const validUser = new userModel({password: "testPass"});
    let saveErr;
    try {
      const savedUser = await validUser.save();
    } catch (err) {
      saveErr = err;
    }
  
    expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(saveErr.errors.username).toBeDefined();
  });
  
  // test user creation without password
  it("create new user without password should fail", async function () {
    const validUser = new userModel({username: "testUser-"+Math.random().toString().substring(2,9)});
    let saveErr;
    try {
      const savedUser = await validUser.save();
    } catch (err) {
      saveErr = err;
    }
    expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(saveErr.errors.password).toBeDefined();
  });
  
  // test user creation with username without required length
  it("creates new user with too short of username should fail", async function () {
    const validUser = new userModel({password: "testPass", username: Math.random().toString().substring(2,5)});
    let saveErr;
    try {
      const savedUser = await validUser.save();
    } catch (err) {
      saveErr = err;
    }
  
    expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(saveErr.errors.username).toBeDefined();
  });
    
  // clean up
  afterAll(async function() {
    // Terminate the database connection.
    mongoose.connection.close(function(err) {
        if(err) throw err;
    });
  });

});
