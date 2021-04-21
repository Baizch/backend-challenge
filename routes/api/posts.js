//import router
const router = require("express").Router();

const { Post } = require("../../db");

//GET /posts/
router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

//GET /posts/:id

//POST /posts/
router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

//PATCH /posts/:id
router.patch("/:postId", async (req, res) => {
  await Post.update(req.body, {
    where: { id: req.params.postId },
  });
  res.json({ success: "Post updated!" });
});

//DELETE /posts/:id
router.delete("/:postId", async (req, res) => {
  await Post.destroy({
    where: { id: req.params.postId },
  });
  res.json({ success: "Post deleted!" });
});

module.exports = router;
