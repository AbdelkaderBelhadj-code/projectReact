function search(id, Tab) {
    return Tab.find(object => object.ID === id);
  }

  export default search ; 