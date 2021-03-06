USE [HackerEarthDB]
GO
/****** Object:  Table [dbo].[Wine]    Script Date: 8/5/2018 10:50:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Wine](
	[id] [int] NOT NULL,
	[country] [nvarchar](255) NULL,
	[description] [nvarchar](max) NULL,
	[designation] [nvarchar](255) NULL,
	[points] [int] NULL,
	[price] [int] NULL,
	[province] [nvarchar](255) NULL,
	[region_1] [nvarchar](255) NULL,
	[region_2] [nvarchar](255) NULL,
	[variety] [nvarchar](255) NULL,
	[winery] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
