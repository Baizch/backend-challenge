//import router
const router = require("express").Router();

const { Post } = require("../../db");

//GET /posts/
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

//GET /posts/:id
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findAll({
      where: { id: req.params.postId },
    });
    res.json(post);

    if (!post) {
      res.json("Post not found!");
    }
  } catch (err) {
    res.json(err);
  }
});

//POST /posts/
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    console.log(err);
  }
});

//PATCH /posts/:id
router.patch("/:postId", async (req, res) => {
  try {
    await Post.update(req.body, {
      where: { id: req.params.postId },
    });
    res.json({ success: "Post updated!" });
  } catch (err) {
    console.log(err);
  }
});

//DELETE /posts/:id
router.delete("/:postId", async (req, res) => {
  await Post.destroy({
    where: { id: req.params.postId },
  });
  res.json({ success: "Post deleted!" });
});

module.exports = router;
