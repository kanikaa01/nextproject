
 const dummy_data = [ 
  {
    "slug": "EfficientDet",
    "title": "Developed by Google Research Team",
    "excerpt": "Achieves state-of-the-art performance with fewer parameters and computations in object detection tasks.",
    "image": "https://deci.ai/wp-content/uploads/2023/10/deci-model-card-efficientnet-featured-2.jpg",
    "isFeatured": false,
    "readerCount": "2.3k",
    "date": "2022-12-30",
    "content": "\r\n \r\n * Item Model Description: Scalable and efficient object detection model based on the EfficientNet architecture.\r\n \r\n * Item Model Category: Computer Vision\r\n \r\n * Item Model Developer/Organization: Google Research\r\n \r\n * Item Model Architecture: Convolutional Neural Network (CNN)\r\n \r\n * Item Key Features: Achieves state-of-the-art performance with fewer parameters and computations in object detection tasks.\r\n \r\n * Item Performance Metrics: Demonstrated superior performance compared to previous object detection models.\r\n \r\n * Item Availability: Open-source (licensed under Apache License 2.0)\r\n \r\n * Item Wikipedia: [link](https://en.wikipedia.org/wiki/Vision_transformer) **https://en.wikipedia.org/wiki/Vision_transformer** \r\n \r\n * Item Google research blog: [link](https://blog.research.google/2019/05/efficientnet-improving-accuracy-and.html?m=1) **https://blog.research.google/2019/05/efficientnet-improving-accuracy-and.html?m=1** \r\n \r\n"
  },
  {
    "slug": "Mask R-CNN",
    "title": "Region-based Convolutional Neural Network",
    "excerpt": "Extends Faster R-CNN by adding a branch for predicting segmentation masks.",
    "image": "https://kikaben.com/mask-r-cnn-faster-r-cnn-mask-branch-2017/images/thumbnail.png",
    "isFeatured": false,
    "readerCount": "1.5k",
    "date": "2022-12-30",
    "content": "\r\n \r\n * Item Model Description: Extends Faster R-CNN by adding a branch for predicting segmentation masks.\r\n \r\n * Item Model Category: Computer Vision\r\n \r\n * Item Model Developer/Organization: Facebook AI Research\r\n \r\n * Item Model Architecture: Convolutional Neural Network (CNN)\r\n \r\n * Item Key Features: Simultaneously predicts object bounding boxes and segmentation masks.\r\n \r\n * Item Performance Metrics: Achieved state-of-the-art results in instance segmentation tasks.\r\n \r\n * Item Availability: Open-source (licensed under MIT License) \r\n \r\n * Item Geeksfoegeeks: [link](https://www.geeksforgeeks.org/mask-r-cnn-ml/) **https://www.geeksforgeeks.org/mask-r-cnn-ml/** \r\n \r\n * Item research blog: [link](https://paperswithcode.com/paper/mask-r-cnn) **https://paperswithcode.com/paper/mask-r-cnn** \r\n \r\n"
  } 
 ]

let response = [];

export async function getPostData(postIdentifier) {
  if(response.length == 0){
    response = await getAllPosts();
  }
  const featuredPosts = response.filter((post) => {
    return postIdentifier == post.slug ? post : null;
  });
  return featuredPosts[0];
}

export async function getAllPosts() {
  return await fetch('https://my-json-server.typicode.com/kanikaa01/mockjson/allPost', { 
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    return response.json();

  }).then(res => {
    const data = [...res , ...dummy_data]; // spread operator
    return data; 
  })
  .catch(error => {
    console.error('Error fetching API:', error);
  });
}

export async function getFeaturedPosts() {
  const allPosts = await getAllPosts();
  console.log(allPosts);
  const sortedPosts = allPosts.sort((postA, postB) =>
       postA.date > postB.date ? -1 : 1
    );

  response = [...sortedPosts];
  const featuredPosts = sortedPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
