
# Cat History

### Requirements
| Features     | Description                                              |
|--------------|----------------------------------------------------------|
| Register cat | You can upload cat images, enter a name and description. |
| Search cat   | You can search for cat information.                      |
| Lookup cat   | You can inquire the detailed information of the cat.     |

### API
|      API     | Method |    Path   |
|:------------:|:------:|:---------:|
| Register cat | POST   | /cats     |
| Search cat   | GET    | /cats     |
| Lookup cat   | GET    | /cats/:id |

### Commit Tags
|   Tag   |           Description           |
|:-------:|:-------------------------------:|
| feature | Commit for new features         |
| enhance | Commit for feature enhancements |
| etc     | And the rest                    |

### Dotenv
Environment files should be placed in root folder.

### Tasks
- [x] Project configurations. (dotenv, TypeORM)
- [x] Implement Register cat API
- [ ] Implement Lookup cat API
- [ ] Implement Search cat API
- [ ] Implement File upload feature.
- [ ] Create migration scripts.
- [ ] Add db seed data for testing.

### Reference
 * [NestJs](https://docs.nestjs.com/)
 * [TypeORM](https://typeorm.io/#/)