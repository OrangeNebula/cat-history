
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
| Register cat | POST   | /cat     |
| Search cat   | GET    | /cat/search     |
| Lookup cat   | GET    | /cat/:id |
| Lookup cat histories   | GET    | /cat/:id/histories |
| Lookup cat images  | GET    | /cat/:id/images |

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
- [x] Implement File upload feature. (Used 120min)
- [ ] Lookup cat histories.
- [ ] Lookup cat images.
- [ ] Create migration scripts.
- [ ] Add db dev, prod configurations (e.g. logging, connection)
- [x] Add db seed cat data for testing. (Used 20min)
- [ ] Add cursor feature for Search cat API. (40min~)
- [ ] Add test code for cat service and domain classes.
- [ ] Upload images mime type validation.
- [ ] Add pre-commit, test stage.
- [x] Add User module layout.
- [ ] Implement get access token logic.
- [ ] Implement refresh token logic.
- [ ] Implement IAM feature.

### Reference
 * [NestJs](https://docs.nestjs.com/)
 * [TypeORM](https://typeorm.io/#/)
