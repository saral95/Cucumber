package org.newtestrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/NewUser.feature", glue="org.newuser", snippets=SnippetType.CAMELCASE)
public class NewTestRunner {

}
