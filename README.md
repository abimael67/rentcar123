# rentcar123
Simple rent car webapp
Requires .Net Core 2.2

1- open a terminal in the webapp folder <br />
2- run npm install <br />
3- generate the SQL Server database with the scripts below this notes <br />
4- open the solution with Visual Studio <br />
5- modify the connection string in appsettings.json file to match yours <br />
- build and run <br /><br />

----------------------- Scripts ---------------------------- <br />
CREATE TABLE [dbo].[Brands] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

 <br /><br />

CREATE TABLE [dbo].[Models] (
    [Id]      INT        IDENTITY (1, 1) NOT NULL,
    [Name]    NCHAR (10) NULL,
    [BrandId] INT        NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Models_To_Brands] FOREIGN KEY ([BrandId]) REFERENCES [dbo].[Brands] ([Id])
);<br /><br />

CREATE TABLE [dbo].[Cars] (
    [Id]         INT             IDENTITY (1, 1) NOT NULL,
    [BrandId]    INT             NOT NULL,
    [ModelId]    INT             NOT NULL,
    [Year]       INT             NOT NULL,
    [Notes]      NVARCHAR (500)  NULL,
    [DailyPrice] DECIMAL (18, 2) NOT NULL,
    [ClientId]   INT             NOT NULL,
    [Color]      VARCHAR (15)    NULL,
    [ImageUrl]   NVARCHAR (500)  NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Cars_To_Brands] FOREIGN KEY ([BrandId]) REFERENCES [dbo].[Brands] ([Id]),
    CONSTRAINT [FK_Cars_To_Models] FOREIGN KEY ([ModelId]) REFERENCES [dbo].[Models] ([Id])
);
<br /><br />

CREATE TABLE [dbo].[Clients] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Firstname]   NVARCHAR (50) NOT NULL,
    [Lastname]    NVARCHAR (50) NOT NULL,
    [PhoneNumber] VARCHAR (15)  NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

