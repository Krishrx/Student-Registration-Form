using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace StudentRegistrationFormAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitializeData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StudentRegFormSet",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    BirthDay = table.Column<int>(type: "integer", nullable: false),
                    BirthMonth = table.Column<string>(type: "text", nullable: false),
                    BirthYear = table.Column<int>(type: "integer", nullable: false),
                    EmailId = table.Column<string>(type: "text", nullable: false),
                    MobileNo = table.Column<string>(type: "text", nullable: false),
                    Gender = table.Column<string>(type: "text", nullable: false),
                    Address = table.Column<string>(type: "text", nullable: false),
                    City = table.Column<string>(type: "text", nullable: false),
                    Pincode = table.Column<int>(type: "integer", nullable: false),
                    State = table.Column<string>(type: "text", nullable: false),
                    Country = table.Column<string>(type: "text", nullable: false),
                    Hobbies = table.Column<string[]>(type: "text[]", nullable: false),
                    SSLCBoard = table.Column<string>(type: "text", nullable: false),
                    SSLCPercentage = table.Column<double>(type: "double precision", nullable: false),
                    SSLCYearOfPassing = table.Column<int>(type: "integer", nullable: false),
                    HSCBoard = table.Column<string>(type: "text", nullable: false),
                    HSCPercentage = table.Column<double>(type: "double precision", nullable: false),
                    HSCYearOfPassing = table.Column<int>(type: "integer", nullable: false),
                    UGBoard = table.Column<string>(type: "text", nullable: false),
                    UGPercentage = table.Column<double>(type: "double precision", nullable: false),
                    UGYearOfPassing = table.Column<int>(type: "integer", nullable: false),
                    PGBoard = table.Column<string>(type: "text", nullable: false),
                    PGPercentage = table.Column<double>(type: "double precision", nullable: false),
                    PGYearOfPassing = table.Column<int>(type: "integer", nullable: false),
                    Course = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentRegFormSet", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentRegFormSet");
        }
    }
}
