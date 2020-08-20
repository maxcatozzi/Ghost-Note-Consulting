const mongoose = require("mongoose");
const blogPostModel = require("../models/blogpost.model");
const userModel = require("../models/user.model");
const blogPostData = { title: "testTitle", body: "test body" };
const userData = { username: "testUser-"+Math.random().toString().substring(1,9), password: "testPass" };


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
    // expect(savedUser.password).toBe(blogPostData.body);
  });

  // test create duplicate new user
	// it("creates duplicate new user should fail", async function () {
  //   const validUser = new userModel(userData);
  //   let saveErr;
	// 	try {
  //     const savedUser = await validUser.save();
  //   } catch (err) {
  //     saveErr = err;
  //   }
  //   console.log(mongoose);
  //   console.warn(saveErr);
  //   expect(saveErr).toBeInstanceOf(mongoose.Error);
    
  // });
  
  // // test blog post creation without title
  // it("creates new blog post without title should fail", async function () {
  //   const validBlogPost = new blogPostModel({body: "bodytest"});
  //   let saveErr;
  //   try {
  //     const savedBlogPost = await validBlogPost.save();
  //   } catch (err) {
  //     saveErr = err;
  //   }
  
  //   expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
  //   expect(saveErr.errors.title).toBeDefined();
  // });
  
  // // test blog post creation without body
  // it("create new blog post without body should fail", async function () {
  //   const validBlogPost = new blogPostModel({title: "bodytest"});
  //   let saveErr;
  //   try {
  //     const savedBlogPost = await validBlogPost.save();
  //   } catch (err) {
  //     saveErr = err;
  //   }
  //   expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
  //   expect(saveErr.errors.body).toBeDefined();
  // });
  
  // // test blog post creation without proper title
  // it("create new blog post without a title of minimum length 1 should fail", async function () {
  //   const validBlogPost = new blogPostModel({title: "", body: "bodytest"});
  //   let saveErr;
  //   try {
  //     const savedBlogPost = await validBlogPost.save();
  //   } catch (err) {
  //     saveErr = err;
  //   }
  //   expect(saveErr).toBeInstanceOf(mongoose.Error.ValidationError);
  //   expect(saveErr.errors.title).toBeDefined();
  // });
  
  // // test blog post creation with unneccesary field
  // it("creates new blog post, but any field not defined in the schema should be undefined", async function () {
  //   const blogPostInvalidField = new blogPostModel({title: "testTitle", body: "bodytest", date: "today"});
	// 	const savedBlogPostInvalidField = await blogPostInvalidField.save();
  //   expect(savedBlogPostInvalidField._id).toBeDefined();
  //   expect(savedBlogPostInvalidField.date).toBeUndefined();
  //   expect(savedBlogPostInvalidField.title).toBe(savedBlogPostInvalidField.title);
  //   expect(savedBlogPostInvalidField.body).toBe(savedBlogPostInvalidField.body);
  // });

  // clean up
  afterAll(async function() {
    // Terminate the database connection.
    mongoose.connection.close(function(err) {
        if(err) throw err;
    });
  });

});
