//index.js
const app = getApp()

Page({
  data: {
    current: 'tab1',
    cards: [1,2],
    bookList: [{"Book link": "http://www.allitebooks.org/learn-kotlin-for-android-development/", "Download link": "http://file.allitebooks.com/20190530/Learn%20Kotlin%20for%20Android%20Development.pdf", "Name": "Learn Kotlin for Android Development", "Thumbnail": "http://www.allitebooks.org/wp-content/uploads/2019/05/Learn-Kotlin-for-Android-Development.jpg", "Description": "Book Description:\nBuild Android apps and learn the essentials of the popular Kotlin programming language and APIs. This book will teach you the key Kotlin skills and techniques important for creating your very own Android apps. Apart from introducing Kotlin programming, Learn Kotlin for Android Development stresses clean code principles and introduces object-oriented and functional programming as a starting point for developing Android apps.\n\n\nAfter reading and using this book, you’ll have a foundation to take away and apply to your own Kotlin-based Android app development. You’ll be able to write useful and efficient Kotlin-based apps for Android, using most of the features Kotlin as a language has to offer.\n\n\nWhat You Will Learn\n\n\n\nBuild your first Kotlin app that runs on Android\nWork with Kotlin classes and objects for Android\nUse constructs, loops, decisions, and scopes\nCarry out operations on data\nMaster data containers, arrays, and collections\nHandle exceptions and access external libraries\n\n\nWho This Book Is For\n\n\nVery little programming experience is required: no prior knowledge of Kotlin needed.", "Author": "Peter Späth", "ISBN-10": "1484244664", "Year": "2019", "Pages": "473", "Language": "English", "File size": "6.2 MB", "File format": "PDF, ePub", "Category": "Programming" },
    {"Book link": "http://www.allitebooks.org/event-streams-in-action/", "Download link": "http://file.allitebooks.com/20190530/Event%20Streams%20in%20Action.epub", "Name": "Event Streams in Action", "Thumbnail": "http://www.allitebooks.org/wp-content/uploads/2019/05/Event-Streams-in-Action.jpg", "Description": "Book Description:\nEvent Streams in Action is a foundational book introducing the ULP paradigm and presenting techniques to use it effectively in data-rich environments.", "Author": "Alexander Dean, Valentin Crettaz", "ISBN-10": "1617292346", "Year": "2019", "Pages": "344", "Language": "English", "File size": "6.2 MB", "File format": "ePub", "Category": "Services & APIs" }]
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function () { }
})
