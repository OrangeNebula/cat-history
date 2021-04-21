
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
- [x] Project configurations. (dotenv, TypeORM) (Used 120min)
- [x] Implement Register cat API (Used 30min)
- [x] Implement Lookup cat API (Used 30min)
- [x] Implement Search cat API (Used 70min)
- [ ] Implement File upload feature.
- [ ] Create migration scripts.
- [ ] Add db dev, prod configurations (e.g. logging, connection)
- [ ] Add db seed data for testing.
- [ ] Add cursor feature for Search cat API

### Reference
 * [NestJs](https://docs.nestjs.com/)
 * [TypeORM](https://typeorm.io/#/)